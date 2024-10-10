function loadComponent(tag, componentName) {
    const basePath = `../components/${componentName}`;
    const element = document.querySelector(tag);

    if (!element) {
        console.error(`No element found for tag: ${tag}`);
        return;
    }

    fetch(`${basePath}/${componentName}.html`)
        .then(response => response.text())
        .then(html => {
            element.innerHTML = html;

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const script = tempDiv.querySelector('script');
            if (script) {
                const newScript = document.createElement('script');
                newScript.textContent = script.textContent;
                document.body.appendChild(newScript);
            }
        })
        .catch(error => {
            console.error(`Error loading ${componentName}:`, error);
        });
}

function loadAllComponents() {
    loadComponent('counter-component', 'counter');
}

window.addEventListener('DOMContentLoaded', loadAllComponents);
