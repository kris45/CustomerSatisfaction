import React, {PureComponent} from 'react';
import ReactHighcharts from 'react-highcharts';
import BrandBlock from '../../components/BrandBlock';
import bestSellerImg from '../../images/img1.jpg';

const mockData = [{
    name: 'Adidas',
    y: 61.41,
    sliced: true,
    selected: true
}, {
    name: 'Nike',
    y: 11.84
}, {
    name: 'Puma',
    y: 10.85
}, {
    name: 'New Balance',
    y: 4.67
}, {
    name: 'Reebok',
    y: 4.18
}, {
    name: 'Converse',
    y: 7.05
}];

const serverData = [
    {
        id: 1,
        name: 'Adidas',
        amount: 61.41,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
    {
        id: 2,
        name: 'Nike',
        amount: 11.84,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
    {
        id: 3,
        name: 'Puma',
        amount: 10.85,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
    {
        id: 4,
        name: 'Reebok',
        amount: 4.18,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
    {
        id: 5,
        name: 'Converse',
        amount: 7.05,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
    {
        id: 6,
        name: 'New Balance',
        amount: 7.05,
        bestSeller: bestSellerImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.'
    },
];

const config = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 400,
        height: 300,

    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
    },
    title: {
        text: 'Customer Satisfaction in January, 2018'
    },
    credits: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            size: 150
        }
    },
    series: [{
        name: 'Brands'
    }]
};

class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            brandsList: [],
            filter: true
        };
        config.series = [{
            name: 'Brands',
            data: [{
                name: 'Adidas',
                y: 61.41
            }, {
                name: 'Nike',
                y: 11.84
            }, {
                name: 'Puma',
                y: 10.85
            }, {
                name: 'New Balance',
                y: 4.67
            }, {
                name: 'Reebok',
                y: 4.18
            }, {
                name: 'Converse',
                y: 7.05
            }]
        }];
    }

    componentDidMount() {
        this.setState({brandsList : serverData});
    }

    setBrands = (data) => (data.map(element =>
        (<BrandBlock
            data={element}
            key={element.id}
        />),
    ));

    handleSearch = () => {
        this.setState({filter: false});
        const inputValue =  this.inputElem.value.toLowerCase();
        const data = this.state.brandsList;
        let filteredData = data.filter((elem) => {
            console.log(elem.name.toLowerCase());
            console.log(elem.name.toLowerCase().indexOf(inputValue));
            return elem.name.toLowerCase().indexOf(inputValue) >= 0
        });
        console.log(filteredData)
        this.setState({brandsList : filteredData});
    }

    render() {
        const {brandsList, filter} = this.state;
        return (
            <div id="content-block">
                <div className=" search-block">
                    <input type="text" id="search-field" ref={(node) => {this.inputElem = node}}/>
                    <label htmlFor="search-field" className="search-button" onClick={this.handleSearch}>Search</label>
                </div>
                {filter &&
                <div id="content-info">
                    <div className="content-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis venenatis purus nec aliquam. Proin non tincidunt tellus. Vestibulum semper sit amet arcu vel mollis. Cras eu placerat massa. Integer fringilla non est ut luctus. Sed facilisis ut lorem ut feugiat. Integer nec bibendum enim, ut dapibus nibh. Nunc sollicitudin nisi dolor, egestas congue urna dignissim vitae. Nulla sem est, pellentesque ac suscipit vitae, tempor a diam. Aliquam lacus nisi, sollicitudin tristique lacus id, mattis dapibus nisl.
                    </div>
                    <div className="chart">
                        <ReactHighcharts config={config}></ReactHighcharts>
                    </div>
                </div>
                }
                <div>
                    {this.setBrands(brandsList)}
                </div>
            </div>
        );
    }
}

export default Content