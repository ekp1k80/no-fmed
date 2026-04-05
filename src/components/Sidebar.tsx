'use client'

import { useRef, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import type { TreeEntry } from '@/lib/doc-tree'
import TreeItem from './TreeItem'

interface SidebarProps {
    tree: TreeEntry[]
    currentUrl?: string
    indentPx?: number
    onItemClick?: (entry: TreeEntry) => boolean | void
    renderItem?: (entry: TreeEntry) => React.ReactNode
}

const SCROLL_KEY = 'doc-sidebar-scroll'

export default function Sidebar({ tree, currentUrl, indentPx = 12, onItemClick, renderItem }: SidebarProps) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()
    const router = useRouter()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        const saved = sessionStorage.getItem(SCROLL_KEY)
        if (saved !== null && scrollRef.current) {
            const top = parseInt(saved, 10)
            requestAnimationFrame(() => {
                if (scrollRef.current) scrollRef.current.scrollTop = top
            })
        }
    }, [pathname])

    const handleScroll = () => {
        if (scrollRef.current) {
            const top = scrollRef.current.scrollTop
            if (top > 0) {
                sessionStorage.setItem(SCROLL_KEY, String(top))
            } else {
                sessionStorage.removeItem(SCROLL_KEY)
            }
        }
    }

    return (
        <>
            {/* Toggle button — fixed bottom */}
            {open ? (
                <button
                    onClick={() => setOpen(false)}
                    style={{
                        position: 'fixed', bottom: '0.75rem', right: '0.75rem', zIndex: 1001,
                        background: 'rgba(15, 15, 30, 0.95)', border: '1px solid #2a2a4a',
                        borderRadius: '8px', padding: '0.5rem', cursor: 'pointer',
                        color: '#f1f5f9',
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            ) : (
                <button
                    onClick={() => setOpen(true)}
                    style={{
                        position: 'fixed', bottom: '0.75rem', left: '0.75rem', zIndex: 1000,
                        background: 'rgba(15, 15, 30, 0.95)', border: '1px solid #2a2a4a',
                        borderRadius: '8px', padding: '0.5rem', cursor: 'pointer',
                        color: '#f1f5f9',
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            )}

            {open && (
                <nav
                    ref={scrollRef}
                    onScroll={handleScroll}
                    style={{
                        width: '280px', background: 'rgba(15, 15, 30, 0.98)',
                        borderRight: '1px solid #2a2a4a', overflowY: 'auto',
                        flexShrink: 0, display: 'flex', flexDirection: 'column',
                        height: '100vh', position: 'sticky', top: 0,
                    }}
                >
                    {/* Logo */}
                    <div style={{
                        padding: '0.75rem', borderBottom: '1px solid #2a2a4a',
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                    }}>
                        <img src="/logo.png" alt="Logo" style={{ width: '36px', height: '36px', display: 'block', borderRadius: '8px' }} />
                        <div>
                            <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.02em' }}>
                                No Fmed
                            </div>
                        </div>
                    </div>

                    {/* Home button */}
                    <div style={{ padding: '0.5rem 0.75rem', borderBottom: '1px solid #2a2a4a' }}>
                        <button
                            onClick={() => router.push('/')}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                width: '100%', padding: '0.4rem 0.5rem',
                                background: 'transparent', border: 'none',
                                borderRadius: '6px', cursor: 'pointer',
                                color: '#f1f5f9', fontSize: '0.8rem',
                                fontFamily: 'system-ui, sans-serif',
                            }}
                        >
                            {/* House icon */}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            home
                        </button>
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
            )}
        </>
    )
}
