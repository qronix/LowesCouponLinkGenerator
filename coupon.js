const generateCoupon =  (amount)=>{
    const leader = "j3iD";
    const trailer = "6iW";
    const boundSets = [[48,57], [65,90], [97,122]];
    const couponURL = "https://lowesdigitalcoupon.rewardpromo.com/?z=SPRING&s=";
    //generate 11 random chars and append the url, leader, and trailer

    for(let j=0; j<amount; j++){
        let randomString = [];
        for(let i=0; i<11; i++){
            let index = Math.floor(Math.random()*3);
            let [lowerBound, upperBound] = [...boundSets[index]];
            let charNumber = Math.floor(Math.random()* (upperBound - lowerBound) + lowerBound);
            let charToAdd = String.fromCharCode(charNumber);
            randomString.push(charToAdd);
        }
        let couponLink = `${couponURL}${leader}${randomString.join('')}${trailer}`;
        window.open(couponLink,'_blank');
    }
}
