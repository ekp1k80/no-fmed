import fs from 'fs/promises'
import path from 'path'
import { buildDocTree } from '@/lib/doc-tree'
import Sidebar from '@/components/Sidebar'
import DocRenderer from '@/components/DocRenderer'

export default async function SidebarDemo() {
    const tree = await buildDocTree()

    // Load Deltoides as default content
    const filePath = path.join(process.cwd(), 'public/md/anato/cintura-pectoral/musculos/Deltoides.md')
    const content = await fs.readFile(filePath, 'utf8')

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#121220' }}>
            <Sidebar
                tree={tree}
                indentPx={12}
            />
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                <DocRenderer
                    content={content}
                    mdBaseUrl="/md/anato/cintura-pectoral/musculos"
                    docBaseUrl="/doc/anato/cintura-pectoral/musculos"
                />
            </main>
        </div>
    )
}
