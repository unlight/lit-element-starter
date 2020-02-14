import './section-controls';

describe('section-controls', () => {
    let element: HTMLElement;

    beforeEach(() => {
        if (element) {
            element.remove();
        }
        element = document.createElement('section-controls');
        element.innerHTML = `<slot>
            <div>some box</div>
            </slot>
            <slot name="controls">controls</slot>
        `;
    });

    it('smoke', () => {
        document.body.append(element);
    });
});
