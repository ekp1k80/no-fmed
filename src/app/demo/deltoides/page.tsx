import fs from 'fs/promises'
import path from 'path'
import DocRenderer from '@/components/DocRenderer'

export default async function DeltoidesDemo() {
    const filePath = path.join(
        process.cwd(),
        'public/md/anato/cintura-pectoral/musculos/Deltoides.md'
    )
    const content = await fs.readFile(filePath, 'utf8')

    return (
        <div style={{ minHeight: '100vh', background: '#121220', padding: '2rem' }}>
            <DocRenderer
                content={content}
                mdBaseUrl="/md/anato/cintura-pectoral/musculos"
                docBaseUrl="/doc/anato/cintura-pectoral/musculos"
            />
        </div>
    )
}
