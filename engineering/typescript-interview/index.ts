import axios from 'axios';
import ProductApi from './src/Api';

const client = axios.create({
    baseURL: 'https://eve.theiconic.com.au',
    timeout: 1000,
});

async function run(): Promise<void> {    
    const productApi = new ProductApi(client);
    /*
        Your Challenge Starts here
        Write a script that consumes our product API and decorates results with video preview links 
    
        * Not all API results contain video previews
        * Think about how you might achieve the challenge with a minimum number of network requests
        * Think about how you might approach this problem if you had 100 products or 100,000 products?
    */

    // log the result to the console
}

run();
