import fs from 'fs/promises'
import path from 'path'

// ─── Roots ──────────────────────────────────────────────────────────────────

export const DOC_ROOTS = ['public/md/anato', 'public/md/histo'] as const

// ─── Types ──────────────────────────────────────────────────────────────────

export interface TreeEntry {
    name: string
    slug: string
    path: string          // relative path from repo root, e.g. "public/md/anato/cintura-pectoral/arterias"
    kind: 'file' | 'dir'
    url?: string          // set by treeParser: "/anato/cintura-pectoral/arterias/Arteria_axilar/Circunfleja_humeral_anterior"
    children?: TreeEntry[]
}

// ─── Filter ─────────────────────────────────────────────────────────────────

export function treeFilter(entry: TreeEntry): TreeEntry | null {
    if (entry.kind === 'file') {
        return entry.name.endsWith('.md') ? entry : null
    }
    if (entry.children) {
        const filtered = entry.children
            .map(treeFilter)
            .filter((c): c is TreeEntry => c !== null)
        entry = { ...entry, children: filtered }
    }
    return entry.children.length > 0 ? entry : null
}

// ─── Parser ─────────────────────────────────────────────────────────────────

export function treeParser(entry: TreeEntry): TreeEntry {
    if (entry.kind === 'file') {
        const url = '/doc/' + entry.path.replace(/^public\/md\//, '').replace(/\.md$/, '')
        const displayName = entry.path
            .split('/')
            .pop()!
            .replace(/\.md$/, '')
            .replace(/_/g, ' ')
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase())
        return { ...entry, name: displayName, url }
    }
    return {
        ...entry,
        children: entry.children?.map(treeParser),
    }
}

// ─── Core walker ────────────────────────────────────────────────────────────

function isHidden(name: string) {
    return name.startsWith('.') ||
        name.toLowerCase().includes('sync-conflict') ||
        name.toLowerCase().includes('chequeo')
}

function nameToDisplay(name: string) {
    return name.replace(/\.md$/, '').replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

async function walkDir(dirPath: string, relPath: string[]): Promise<TreeEntry[]> {
    const entries = await fs.readdir(dirPath, { withFileTypes: true })
    const result: TreeEntry[] = []

    for (const entry of entries) {
        if (isHidden(entry.name)) continue

        const childRel = [...relPath, entry.name]
        const childPath = path.join(dirPath, entry.name)

        if (entry.isDirectory()) {
            const children = await walkDir(childPath, childRel)
            result.push({
                name: nameToDisplay(entry.name),
                slug: entry.name,
                path: childRel.join('/'),
                kind: 'dir',
                children,
            })
        } else {
            result.push({
                name: entry.name,
                slug: entry.name.replace(/\.md$/, ''),
                path: childRel.join('/'),
                kind: 'file',
            })
        }
    }

    return result
}

// ─── Main function ─────────────────────────────────────────────────────────

export async function buildDocTree(): Promise<TreeEntry[]> {
    const roots = await Promise.all(
        DOC_ROOTS.map(async (root) => {
            const relRoot = root.split('/')
            const name = relRoot[relRoot.length - 1]
            const children = await walkDir(path.join(process.cwd(), root), relRoot)
            return {
                name: nameToDisplay(name),
                slug: name,
                path: relRoot.join('/'),
                kind: 'dir' as const,
                children,
            }
        })
    )
    return roots
}
