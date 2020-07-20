let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];
let extensions = [".com", ".net"];

for (let pro of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for (let ext of extensions){
                console.log(pro + adj + noun + ext);
            }
        }
    }
}