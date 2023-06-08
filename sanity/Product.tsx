
//schema means just a structure of our database , what will bw the structure , just like model
export const Product = {
  name: "Product",
  type: "document", //means our schema type will be a document 
  title: "Products", //this is just a label for the products while name is the actual name through which i will fetch the data
  fields: [ //fields in our schema document
        {
            name: "title",
            title: "product title",
            type: "string"
        },
        {
            name: "price",
            title: "product price",
            type: "number"
        },
        {
            name: "description",
            title: "product description",
            type: "string"
        },
        {
            name: "image",
            title: "product image",
            type: "image"
        },
        {
            name:"category",
            title: "product category",
            type: "reference",
            to: [
                    {
                        type: "category"
                    },
                ]
        }

  ] 
}
