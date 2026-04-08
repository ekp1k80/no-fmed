import docSlugs from '@/lib/doc-slugs.json'
import docTree from '@/lib/doc-tree.json'
import DocShell from '@/components/DocShell'
import DocRenderer from '@/components/DocRenderer'
import type { TreeEntry } from '@/lib/doc-tree'

const R2_BASE = 'https://pub-48b3fe45b5644de3a07fba0a1408a720.r2.dev'
const R2_MD_BASE = R2_BASE + '/public/md'

interface Props {
    params: { slug: string[] }
}

export async function generateStaticParams() {
    return docSlugs as { slug: string[] }[]
}

export default async function DocPage({ params }: Props) {
    const { slug } = await params
    const slugArray: string[] = Array.isArray(slug) ? slug : []
    if (!slugArray.length) return <p style={{ color: '#64748b' }}>Cargando…</p>
    const slugPath = slugArray.join('/')
    const r2Url = `${R2_BASE}/public/md/${slugPath}.md`
    const categorySlug = slugArray.slice(0, -1).join('/')
    const categoryUrl = `/doc/${categorySlug}`
    const mdCategoryUrl = `${R2_MD_BASE}/${categorySlug}`

    let content = ''
    try {
        const res = await fetch(r2Url, {
            next: { revalidate: 604800 }, // 7 days
            cache: 'force-cache', // default cache in production
        })
        if (res.ok) content = await res.text()
    } catch { /* R2 not reachable */ }

    const tree = docTree as TreeEntry[]

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#121220' }}>
            <DocShell tree={tree} initialUrl={`/doc/${slugPath}`} />
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
