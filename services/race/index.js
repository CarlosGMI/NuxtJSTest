export const buildResults = (images, sellers) => {
    let results = [];

    for (let i = 0; i < sellers.length; i++) {
        results.push({
            id: sellers[i].id,
            name: sellers[i].name,
            image: {
                medium: images[i].src.medium,
                landscape: images[i].src.landscape,
                original: images[i].src.original
            }
        })
    }

    return results;
}