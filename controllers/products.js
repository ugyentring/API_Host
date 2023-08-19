const Product = require("../models/product");

const getAllProducts = async (req, res)=>{

    const {company, name, featured, sort, select} = req.query;
    const queryObject = {};

    if (company){
        queryObject.company = company;
    }

    if (featured){
        queryObject.featured = featured;
    }

    if(name){
        queryObject.name = {$regex: name, $options : "i"};
    }

    let apiData = Product.find(queryObject);

    if (sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // select
    if (select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // pagination
    let page =Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1)*limit;
    apiData = apiData.skip(skip).limit(limit);

    console.log(queryObject);

    const myData = await apiData
    res.status(200).json({ myData, nbHits: myData.length });
};

const getAllProductsTesting = async (req, res)=>{
    // req.query is used to filter the data
    const myData = await Product.find(req.query).select("name, price");

    res.status(200).json({ myData });
}

module.exports ={getAllProducts, getAllProductsTesting};