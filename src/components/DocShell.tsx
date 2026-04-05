'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { TreeEntry } from '@/lib/doc-tree'
import Sidebar from './Sidebar'

interface Props {
    tree: TreeEntry[]
    initialUrl?: string
}

export default function DocShell({ tree, initialUrl }: Props) {
    const [currentUrl, setCurrentUrl] = useState<string | undefined>(initialUrl)
    const router = useRouter()

    const handleItemClick = (entry: TreeEntry) => {
        if (entry.kind === 'file' && entry.url) {
            setCurrentUrl(entry.url)
            router.push(entry.url, { scroll: false })
        }
    }

    return (
        <Sidebar
            tree={tree}
            currentUrl={currentUrl}
            onItemClick={handleItemClick}
        />
    )
}
