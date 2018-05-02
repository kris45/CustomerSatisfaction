import React, {PureComponent} from 'react'


class BrandBlock extends PureComponent {

    render() {
        const {
            name,
            id,
            amount,
            bestSeller,
            description
        } = this.props.data;

        return (
            <div className="brand-block">
                <div className="brand-header">{name}</div>
                <div className="brand-description">
                    <h3>Description</h3>
                    <span>Percentage {amount}</span>
                    <div>{description}</div>
                </div>
                <img src={bestSeller} className="brand-img"/>
            </div>
        )
    }
}

export default BrandBlock