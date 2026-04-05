import { buildDocTree } from '@/lib/doc-tree'

export default async function TreeDebug() {
    const tree = await buildDocTree()
    return (
        <pre style={{ color: '#f1f5f9', background: '#0f0f1a', padding: '2rem', fontSize: '0.7rem', overflow: 'auto' }}>
            {JSON.stringify(tree, null, 2)}
        </pre>
    )
}
