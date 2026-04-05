'use client'

import { useState } from 'react'
import type { TreeEntry } from '@/lib/doc-tree'
import Sidebar from './Sidebar'
import DocRenderer from './DocRenderer'

interface Props {
    tree: TreeEntry[]
}

export default function DocApp({ tree }: Props) {
    const [activeUrl, setActiveUrl] = useState<string | null>(null)

    const handleItemClick = (entry: TreeEntry) => {
        if (entry.kind === 'file' && entry.url) {
            setActiveUrl(entry.url)
        }
    }

    const docBaseUrl = activeUrl ? `/md${activeUrl}` : null

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#121220' }}>
            <Sidebar
                tree={tree}
                indentPx={12}
                onItemClick={handleItemClick}
            />
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
                {activeUrl && docBaseUrl ? (
                    <DocRenderer
                        content=""
                        mdBaseUrl={docBaseUrl}
                        docBaseUrl={activeUrl}
                    />
                ) : (
                    <p style={{ color: '#64748b', fontFamily: 'system-ui' }}>
                        Seleccioná un archivo del sidebar
                    </p>
                )}
            </main>
        </div>
    )
}
