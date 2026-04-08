const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = 'C:\\home\\federico\\.openclaw\\workspace\\fmed-1ro';

function getGitFiles() {
    try {
        const output = execSync(
            'git ls-tree -r --name-only HEAD -- public/md/anato public/md/histo',
            { encoding: 'utf8', cwd: REPO_ROOT }
        );
        return output.trim().split('\n').filter(f => f.endsWith('.md'));
    } catch (e) {
        console.error('git ls-tree failed:', e.message);
        return [];
    }
}

function nameToDisplay(name) {
    return name.replace(/\.md$/, '').replace(/_/g, ' ').replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

function buildTree(files) {
    const roots = [
        { name: 'Anato', slug: 'anato', path: 'public/md/anato', kind: 'dir', children: [] },
        { name: 'Histo', slug: 'histo', path: 'public/md/histo', kind: 'dir', children: [] },
    ];

    for (const file of files) {
        const parts = file.replace(/^public\/md\//, '').replace(/\.md$/, '').split('/');
        const url = '/doc/' + parts.join('/');

        let node = roots.find(r => r.path === 'public/md/' + parts[0]);
        if (!node) continue;

        let current = node;
        for (let i = 1; i < parts.length - 1; i++) {
            let child = current.children.find(c => c.name === parts[i]);
            if (!child) {
                child = { name: parts[i], slug: parts[i], path: current.path + '/' + parts[i], kind: 'dir', children: [] };
                current.children.push(child);
            }
            current = child;
        }

        const fileName = parts[parts.length - 1];
        current.children.push({
            name: nameToDisplay(fileName),
            slug: fileName,
            path: file,
            kind: 'file',
            url: url,
        });
    }

    // Assign display names to dir nodes
    function assignDisplay(node) {
        if (node.kind === 'dir') {
            node.name = nameToDisplay(node.slug);
            if (node.children) node.children.forEach(assignDisplay);
        }
    }
    roots.forEach(assignDisplay);
    return roots;
}

const mdFiles = getGitFiles();
console.log('Found ' + mdFiles.length + ' .md files');

const slugs = mdFiles.map(function(file) {
    var urlPath = file.replace(/^public\/md\//, '').replace(/\.md$/, '');
    return { slug: urlPath.split('/') };
});

const tree = buildTree(mdFiles);

// Write slug list
var slugsPath = path.join(REPO_ROOT, 'src/lib/doc-slugs.json');
fs.writeFileSync(slugsPath, JSON.stringify(slugs, null, 2));
console.log('Wrote ' + slugs.length + ' slugs -> ' + slugsPath);

// Write tree
var treePath = path.join(REPO_ROOT, 'src/lib/doc-tree.json');
fs.writeFileSync(treePath, JSON.stringify(tree, null, 2));
console.log('Wrote tree -> ' + treePath);
