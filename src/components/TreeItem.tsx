'use client'

import { useState } from 'react'
import type { TreeEntry } from '@/lib/doc-tree'

interface TreeItemProps {
    entry: TreeEntry
    depth: number
    currentUrl?: string
    indentPx?: number
    /** Called when a file item is clicked. Return false to prevent default navigation. */
    onItemClick?: (entry: TreeEntry) => boolean | void
    renderItem?: (entry: TreeEntry) => React.ReactNode
}

// ─── Collapsible folder ─────────────────────────────────────────────────────

function FolderItem({ entry, depth, currentUrl, indentPx, onItemClick, renderItem }: TreeItemProps) {
    // entry.path = "public/md/anato/cintura-pectoral/arterias"
    // strip "public/md/" prefix to get slug portion, then check if URL contains it
    const pathWithoutPrefix = entry.path.replace(/^public\/md\//, '')
    const isInPath = Boolean(currentUrl && currentUrl.includes(pathWithoutPrefix))
    const [open, setOpen] = useState(isInPath)

    return (
        <div>
            <button
                onClick={() => setOpen(o => !o)}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '0.3rem 0.5rem',
                    paddingLeft: `${0.5 + depth * indentPx!}px`,
                    borderRadius: '6px', border: 'none',
                    background: 'transparent', cursor: 'pointer',
                    color: '#f1f5f9',
                    fontSize: depth === 0 ? '0.72rem' : '0.73rem',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.06em', fontWeight: 700,
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const, maxWidth: '165px', textAlign: 'left' as const }}>
                    {entry.name}
                </span>
                <span style={{ transition: 'transform 0.15s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: '0.5rem' }}>
                    ▶
                </span>
            </button>

            {open && (
                <div>
                    {entry.children!.map(child => (
                        <TreeItem
                            key={child.path}
                            entry={child}
                            depth={depth + 1}
                            currentUrl={currentUrl}
                            indentPx={indentPx}
                            onItemClick={onItemClick}
                            renderItem={renderItem}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

// ─── Clickable file item ────────────────────────────────────────────────────

function FileItem({ entry, depth, currentUrl, indentPx, onItemClick, renderItem }: TreeItemProps) {
    const isActive = Boolean(currentUrl && entry.url === currentUrl)
    if (renderItem) {
        return (
            <div style={{ paddingLeft: `${0.5 + (depth + 1) * indentPx!}px` }}>
                {renderItem(entry)}
            </div>
        )
    }

    const handleClick = (e: React.MouseEvent) => {
        const result = onItemClick?.(entry)
        if (result === false) e.preventDefault()
    }

    return (
        <a
            href={entry.url ?? '#'}
            onClick={handleClick}
            style={{
                display: 'block', padding: '0.28rem 0.5rem',
                paddingLeft: `${0.5 + (depth + 1) * indentPx!}px`,
                borderRadius: '6px',
                fontSize: depth === 0 ? '0.8rem' : '0.78rem',
                color: isActive ? '#f1f5f9' : '#94a3b8',
                background: isActive ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                fontWeight: isActive ? 600 : 400,
                textDecoration: 'none', marginBottom: '1px',
                whiteSpace: 'nowrap' as const, overflow: 'hidden', textOverflow: 'ellipsis',
            }}
        >
            {entry.name}
        </a>
    )
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function TreeItem(props: TreeItemProps) {
    if (props.entry.kind === 'dir') {
        return <FolderItem {...props} />
    }
    return <FileItem {...props} />
}
