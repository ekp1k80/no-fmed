// =============================================================================
// Doc Parsers
// =============================================================================

export function parseWikiLinks(content: string, baseUrl: string): string {
    return content.replace(
        /(?:<a href[^>]*>.*?<\/a>|!\[\[[^\]]+\]\]|\[\[[^\]]+\]\])/g,
        match => {
            if (match.startsWith('<a href') || match.startsWith('![[')) return match
            const inner = match.slice(2, -2)
            let target = inner, displayText: string | null = null, section: string | null = null
            const hashIdx = inner.indexOf('#')
            const pipeIdx = inner.indexOf('|')
            if (hashIdx !== -1) {
                target = inner.slice(0, hashIdx)
                const rest = inner.slice(hashIdx + 1)
                const restPipeIdx = rest.indexOf('|')
                if (restPipeIdx !== -1) {
                    section = rest.slice(0, restPipeIdx)
                    displayText = rest.slice(restPipeIdx + 1)
                } else {
                    section = rest
                }
            } else if (pipeIdx !== -1) {
                target = inner.slice(0, pipeIdx)
                displayText = inner.slice(pipeIdx + 1)
            }
            const targetSlug = target.trim().toLowerCase().replace(/\s+/g, '-')
            let url = `${baseUrl}/${targetSlug}`
            if (section) {
                const anchor = section.trim().toLowerCase().replace(/\s+/g, '-')
                url += `?seccion=${anchor}`
            }
            const text = displayText
                ? displayText.trim()
                : (section ? section.trim() : target.trim())
            return `<a href="${url}">${text}</a>`
        }
    )
}

export function parseTags(content: string, tagHref: string): string {
    return content.replace(
        /(?:^|(?<=[^\w-]))#([a-zA-Z][\w-]*)(?![^<]*>)/g,
        (match, tagName) => `<a href="${tagHref}${tagName}" class="tag">${tagName}</a>`
    )
}

export function parseEmbeds(content: string, mdBaseUrl: string): string {
    return content.replace(
        /!\[\[([^\]]+)\]\]/g,
        (_match: string, inner: string) => {
            const pipeIdx = inner.indexOf('|')
            const rawPath = pipeIdx !== -1 ? inner.slice(0, pipeIdx) : inner
            const size = pipeIdx !== -1 ? inner.slice(pipeIdx + 1).trim() : null
            const src = rawPath.trim().split('/').map((s: string) => s.replace(/\s+/g, '-')).join('/')
            const widthAttr = size ? ` width="${size}"` : ''
            return `<img src="${mdBaseUrl}/${src}"${widthAttr} loading="lazy">`
        }
    )
}

export function slugToName(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}
