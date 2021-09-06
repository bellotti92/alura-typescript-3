export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }

    //@inspect
    /* Quando o decorator retornar a própria função do decorator, não se deve chamar como função
    Essa forma é aplicada quando se não tem parâmetros no decorator.
     */
    //@logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}