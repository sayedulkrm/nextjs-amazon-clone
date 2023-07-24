export async function getServerSideProps() {
    const api = "https://fakestoreapiserver.reactbd.com/tech";
    const api2 = "https://fakestoreapiserver.reactbd.com/tech";
    try {
        const response = await fetch(api);
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.log(error, "Error getting Data");
    }
}
