import { buildDocTree, treeFilter, treeParser, TreeEntry } from '@/lib/doc-tree'
import DocShell from '@/components/DocShell'
import DocRenderer from '@/components/DocRenderer'

const R2_BASE = 'https://pub-48b3fe45b5644de3a07fba0a1408a720.r2.dev'
const R2_MD_BASE = R2_BASE + '/public/md'

interface Props {
    params: { slug: string[] }
}

async function getDocTree() {
    try {
        const rawTree = await buildDocTree()
        const filteredTree = rawTree
            .map((e: TreeEntry) => treeFilter(e))
            .filter((e: TreeEntry | null): e is TreeEntry => e !== null)
        const tree = { name: '', slug: '', path: '', kind: 'dir' as const, children: filteredTree }
        return treeParser(tree)
    } catch {
        return null
    }
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    const parsedTree = await getDocTree()
    if (!parsedTree) return []

    const slugs: { slug: string[] }[] = []
    function collectFiles(entry: TreeEntry) {
        if (entry.kind === 'file') {
            const urlPath = entry.path.replace(/^public\/md\//, '').replace(/\.md$/, '')
            slugs.push({ slug: urlPath.split('/') })
        }
        entry.children?.forEach(collectFiles)
    }
    parsedTree.children?.forEach(collectFiles)
    return slugs
}

export default async function DocPage({ params }: Props) {
    const slugArray: string[] = Array.isArray(params.slug) ? params.slug : []
    if (!slugArray.length) return <p style={{ color: '#64748b' }}>Cargando…</p>
    const slugPath = slugArray.join('/')
    const r2Url = `${R2_BASE}/public/md/${slugPath}.md`
    const categorySlug = slugArray.slice(0, -1).join('/')
    const categoryUrl = `/doc/${categorySlug}`
    const mdCategoryUrl = `${R2_MD_BASE}/${categorySlug}`

    let content = ''
    try {
        const res = await fetch(r2Url, { next: { revalidate: 3600 } })
        if (res.ok) content = await res.text()
    } catch {
        // fallback: try local file in dev
        try {
            const fs = await import('fs/promises')
            const path = await import('path')
            const localPath = path.join(process.cwd(), 'public/md', `${slugPath}.md`)
            content = await fs.readFile(localPath, 'utf8')
        } catch { /* no local file either */ }
    }

    const parsedTree = await getDocTree()

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#121220' }}>
            <DocShell tree={parsedTree?.children ?? []} initialUrl={`/doc/${slugPath}`} />
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                {content ? (
                    <DocRenderer content={content} mdBaseUrl={mdCategoryUrl} docBaseUrl={categoryUrl} />
                ) : (
                    <p style={{ color: '#64748b', fontFamily: 'system-ui' }}>Seleccioná un archivo del sidebar</p>
                )}
            </main>
        </div>
    )
}
