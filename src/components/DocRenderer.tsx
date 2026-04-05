'use client'

import { useMemo } from 'react'
import { marked } from 'marked'
import { parseWikiLinks, parseTags, parseEmbeds } from '@/lib/doc-parsers'

interface Props {
    content: string
    /** e.g. "/md/anato/cintura-pectoral/musculos" */
    mdBaseUrl: string
    /** e.g. "/doc/anato/cintura-pectoral/musculos" (category base, not file) */
    docBaseUrl: string
}

export default function DocRenderer({ content, mdBaseUrl, docBaseUrl }: Props) {
    const html = useMemo(() => {
        let out = content

        // 1. Wiki-style links → <a href="...">
        out = parseWikiLinks(out, docBaseUrl)

        // 2. #tags → <a class="tag" href="...?tag=...">
        out = parseTags(out, `${docBaseUrl}?tag=`)

        // 3. ![[...]] → <img src="...">
        out = parseEmbeds(out, mdBaseUrl)

        // 4. Standard markdown images
        out = out.replace(
            /!\[([^\]]*)\]\(([^)]+)\)/g,
            (_match: string, alt: string, src: string) => {
                const srcPath = src.startsWith('/') ? src : `${mdBaseUrl}/${src}`
                return `<img src="${srcPath}" alt="${alt}" loading="lazy">`
            }
        )

        // 5. marked — custom image renderer
        const renderer = new marked.Renderer()
        renderer.image = (token: any) => {
            const href = typeof token.href === 'object' ? (token.href as any).href ?? '' : String(token.href ?? '')
            const title = token.title ? String(token.title) : null
            const text = token.text ? String(token.text) : ''
            const src = href.startsWith('/') ? href : `${mdBaseUrl}/${href}`
            const titleAttr = title ? ` title="${title}"` : ''
            return `<img src="${src}" alt="${text}"${titleAttr} loading="lazy">`
        }

        return marked.parse(out, { renderer }) as string
    }, [content, mdBaseUrl, docBaseUrl])

    return (
        <div
            className="doc-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
