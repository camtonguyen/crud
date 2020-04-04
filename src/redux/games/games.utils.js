export const findGame = (listItem, initialItem) => {
    const index = listItem.findIndex(item => item._id === initialItem._id);
    if(index > -1) {
        return listItem.map(item => {
            if(item._id === initialItem._id) return initialItem;
            return item
        })
    } else {
        return {
            ...listItem,
            initialItem
        }
    }
};

export const updateExistingGame = (listItem, inputItem) => {
    listItem.map(item => {
        if (item._id === inputItem._id) return inputItem;
        return item;
    })
}