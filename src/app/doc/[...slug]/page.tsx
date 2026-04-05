import fs from 'fs/promises'
import path from 'path'
import { notFound } from 'next/navigation'
import { buildDocTree, treeFilter, treeParser } from '@/lib/doc-tree'
import Sidebar from '@/components/Sidebar'
import DocRenderer from '@/components/DocRenderer'

interface Props {
    params: Promise<{ slug: string[] }>
}

export default async function DocPage({ params }: Props) {
    const { slug } = await params

    // Build, filter and parse tree
    const rawTree = await buildDocTree()
    const filteredTree = rawTree
        .map((e: any) => treeFilter(e))
        .filter((e: any): e is TreeEntry => e !== null)
    const tree = { name: '', slug: '', path: '', kind: 'dir' as const, children: filteredTree }
    const parsedTree = treeParser(tree)

    // Current file path from URL slug
    // URL: /doc/anato/cintura-pectoral/arterias/Arteria_axilar/Circunfleja_humeral_anterior
    // File: public/md/anato/cintura-pectoral/arterias/Arteria_axilar/Circunfleja_humeral_anterior.md
    const slugPath = slug.join('/')
    const filePath = path.join(process.cwd(), 'public/md', `${slugPath}.md`)
    // categoryUrl = "/doc/anato/cintura-pectoral/arterias/Arteria_axilar" (without last slug segment)
    const categorySlug = slug.slice(0, -1).join('/')
    const categoryUrl = `/doc/${categorySlug}`
    const mdCategoryUrl = `/md/${categorySlug}`

    let content = ''

    try {
        content = await fs.readFile(filePath, 'utf8')
    } catch {
        // No file for this URL — just show sidebar
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#121220' }}>
            <Sidebar tree={parsedTree.children ?? []} indentPx={12} currentUrl={`/doc/${slugPath}`} />
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
