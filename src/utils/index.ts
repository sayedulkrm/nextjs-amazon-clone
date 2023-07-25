export async function getServerSideProps() {
    const api = "https://fakestoreapiserver.reactbd.com/tech";
    const api2 = "https://645a23b065bd868e9312083e.mockapi.io/amazondata";
    try {
        const response = await fetch(api, {
            cache: "no-store",
        });
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.log(error, "Error getting Data");
    }
}
