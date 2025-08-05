const recipyValidate={
    checkLevel: (level) => {
        const validLevels = ["קל", "בינוני", "קשה"];
        if (!validLevels.includes(level)) {
            throw new Error("The level you entered is incorrect.");
        }
    },
    checkSort: (sort) => {
        const validSort = ["חלבי", "בשרי", "פרווה"];
        if (!validSort.includes(sort)) {
            throw new Error("The sort you entered is incorrect.");
        }
    
    }
}

export default recipyValidate