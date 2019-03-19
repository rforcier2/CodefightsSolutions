# Product Management


You work at an electronics shop, and you've just received a shipment containing
new models of Verkada security cameras. With these new items, you'll need to make
 some updates to your product database.

Each product in your database has a unique SKU (id) and a product name (name), and
the system accepts several different commands:

The methods that should be supported are listed below:

- **createProduct(id, name)** - creates a record for a new product. Returns false if a product with the specified id already exists, and true otherwise;

- **updateProduct(id, name)** - updates the product with the provided info. Returns false if the product with such id does not exist, and true otherwise.

- **deleteProduct(id)** - deletes the provided product. Returns false if the product with this id does not exist, and true otherwise.

- **findProductById(id)** - finds a product by id. Returns the product (in the form of a JSON) if the product with this id exists, and null otherwise.

- **findProductByTitle(title)** - find a product by title. Returns the product (in the form of a JSON) if the product with this title exists, and null otherwise.


For each command of the first three types, return its result - "true" or "false" and for the last two commands return the product - its result as a stringified JSON (or "null" if no product was found).

**Example**

For operations = [["createProduct", "10", "Camera_10"], ["createProduct", "10", "Camera_10"], ["updateProduct", "10", "New_Camera_10"], ["deleteProduct", "9"],["findBookById", "9"], ["findProductById", "10"], ["findProductByTitle", "Camera_10"], ["findProductByTitle", "New_Camera_10"]],

 *the output should be*
productManagement(operations) = ["true", "false", "true", "false", "null", "{"id":"10","title":"New_Camera_10"}", "null", "{"id":"10","title":"New_Camera_10"}"].
