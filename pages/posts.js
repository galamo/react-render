import React, { Component } from 'react'


export default class extends Component {
    static getInitialProps(options) {
        let pageProps = { a: 1 };
        return { pageProps, data: options.query };
    }

    render() {

        const { data = [] } = this.props

        if (!Array.isArray(data)) return <div>loading...</div>
        return (
            <div>

                <h1>Products sdasfdagdg</h1>
                {data.map(item => {
                    return <h1> {item.title} </h1>
                })}
            </div>
        )
    }
}
