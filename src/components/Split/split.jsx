import split from "./css_split.module.css"

function Split(){
    return(<div>
        <section className={split.subcontent}>
                <div className={split.left}>
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="logo" />
                </div>
                <div className={split.right}>
                    <section className={split.rightcontainer}>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                    <button>Get in Touch</button>
                    </section>
                </div>
            </section>
    </div>)
}

export default Split;