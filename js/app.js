                // 8 gb memory 



document.getElementById('8gb-charge').addEventListener('click', function () {
    const memeoy8gbPrice = document.getElementById('memory-cost');
    const memory8gbPriceAdd = parseFloat(memeoy8gbPrice.innerText); 
    const memoryTotal8gbPrice = 0;
    memeoy8gbPrice.innerText = memoryTotal8gbPrice;
    calculation();
});



                // 16 gb memory


document.getElementById('16gb-charge').addEventListener('click', function () {
    const memeoy16gbPrice = document.getElementById('memory-cost');
    const memory16gbPriceAdd = parseInt(memeoy16gbPrice.innerText );
    const memoryTotal16gbPrice = 180;
    
    memeoy16gbPrice.innerText = memoryTotal16gbPrice;
    calculation();
});


            // memory end here 


            // storage start


                // 256 ssd 
document.getElementById('256ssd-charge').addEventListener('click', function () {
    const ssd256Storage = document.getElementById('storage-cost');
    const ssd256StorageAdd = parseFloat(ssd256Storage.innerText);
    const ssd256TotalStoragePrice = 0;
    ssd256Storage.innerText = ssd256TotalStoragePrice;
    calculation();
});

                //  512 ssd
document.getElementById('512ssd-charge').addEventListener('click', function () {
    const ssd512Storage = document.getElementById('storage-cost');
    const ssd512StorageAdd = parseFloat(ssd512Storage.innerTex);
    const ssd512TotalStoragePrice = 100;
    ssd512Storage.innerText = ssd512TotalStoragePrice;
    calculation();
});

                //  1TB ssd
document.getElementById('1tbssd-charge').addEventListener('click', function () {
    const ssd1tbStorage = document.getElementById('storage-cost');
    const ssd1tbStorageAdd = parseFloat(ssd1tbStorage.innerText);
    const ssd1tbTotalStoragePrice = 180;
    ssd1tbStorage.innerText = ssd1tbTotalStoragePrice;
    calculation();
});



            //  delivery cost 

document.getElementById('free-charge').addEventListener('click', function () {
    const freeDelivery = document.getElementById('delivery-charge');
    const freeDeliveryCost = parseInt(freeDelivery.innerText);
    const freeDeliveryTotalCost = 0;
    
    freeDelivery.innerText = freeDeliveryTotalCost;
    
    calculation();
});


document.getElementById('premium-charge').addEventListener('click', function () {
    const premiumDelivery = document.getElementById('delivery-charge');
    const premiumDeliveryCost = parseInt(premiumDelivery.innerText);
    const premiumDeliveryTotalCost = 20;
    premiumDelivery.innerText = premiumDeliveryTotalCost;

    calculation();
    

});

document.getElementById('apply-promo').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code').value;
    calculation()
})


function calculation() {
    const extramemorycost = document.getElementById('memory-cost').innerText;
    const extramemorycostInt = parseInt(extramemorycost);
    const storageCost = document.getElementById('storage-cost').innerText;
    const storageCostInt = parseInt(storageCost);
    const deliveryPrice = document.getElementById('delivery-charge').innerText;
    const deliveryPriceInt = parseInt(deliveryPrice);
    const bestPrice = document.getElementById('best-price').innerText;
    const bestPriceInt = parseInt(bestPrice);

    subTotal = extramemorycostInt + storageCostInt + deliveryPriceInt + bestPriceInt;
    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('last-price').innerText = subTotal;


    const promoCodeAdd = document.getElementById('promo-code').value;
    let promo = 'stevekaku'

    if(promo == promoCodeAdd){
        promoTotal = parseInt(subTotal / 20) ;

        document.getElementById('total-price').innerText = subTotal - promoTotal;
        document.getElementById('last-price').innerText = subTotal - promoTotal
    }

    
}






