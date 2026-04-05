'use client'

import type { TreeEntry } from '@/lib/doc-tree'
import TreeItem from './TreeItem'

interface SidebarProps {
    tree: TreeEntry[]
    currentUrl?: string
    indentPx?: number
    onItemClick?: (entry: TreeEntry) => boolean | void
    renderItem?: (entry: TreeEntry) => React.ReactNode
}

export default function Sidebar({ tree, currentUrl, indentPx = 12, onItemClick, renderItem }: SidebarProps) {
    return (
        <nav style={{
            width: '280px', background: 'rgba(15, 15, 30, 0.98)',
            borderRight: '1px solid #2a2a4a', overflowY: 'auto',
            flexShrink: 0, display: 'flex', flexDirection: 'column',
            height: '100vh', position: 'sticky', top: 0,
        }}>
            {/* Header */}
            <div style={{
                padding: '0.75rem', borderBottom: '1px solid #2a2a4a',
                display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem',
            }}>
                <img src="/logo.png" alt="Logo" style={{ width: '36px', height: '36px', display: 'block' }} />
                <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                        No Fmed
                    </div>
                </div>
            </div>

            {/* Tree */}
            <div style={{ padding: '0.5rem 0.75rem', flex: 1 }}>
                {tree.map(root => (
                    <TreeItem
                        key={root.path}
                        entry={root}
                        depth={0}
                        indentPx={indentPx}
                        currentUrl={currentUrl}
                        onItemClick={onItemClick}
                        renderItem={renderItem}
                    />
                ))}
            </div>
        </nav>
    )
}
