export const CraftingWalkthroughStages = (t: (key: string) => string) => [
  {
    id: '#inventoryTrigger',
    title: 'Inventory',
    content:
      'Here you can add your owned items, either tradable or non tradable and they will be counted for the total result of the recipe you are trying to calculate.',
  },
  {
    id: '#mainItemFrame',
    title: 'Select your item recipe',
    content:
      "That's the main item frame where you can control the selected recipe.",
  },
  {
    id: '#recipeSubitems',
    title: 'Recipe cost',
    content:
      "Here you can see the needed amount of items for the recipe you've selected. \n\n Remember you can change the visibility settings of each rarity. \n eg: Show only Legendary and Epic items.",
  },
  {
    id: '#recipeSubitems>*>*',
    title: 'Recipe item',
    content:
      'It shows the required amount of each item and its rarity, you can hover with your mouse over an abstract number and reveal its specific value. \n eg: 3k -> 3000. \n \n Remember you can also show your tradable and non-tradable owned amount of that item by changing your settings.',
  },
  {
    id: '#totalCostPanel',
    title: 'Total cost panel',
    content:
      "Here's where you can see the result of a calculation, this can be affected by your inventory items or rarity items visibility settings. \n\n Remember you can hover over abstract numbers to see their specific values",
  },
  {
    id: '#totalCostWithRarity',
    title: 'Cost of rarity items',
    content:
      'This left panel shows the cost of items with rarity, this can be a result of the necessary cost of base items for your recipe. \n\n For example, this panel can account for the necessary items for crafting rare steel for a rare weapon.',
  },
  {
    id: '#totalCostWithoutRarity',
    title: 'Cost of generic items',
    content:
      "This right panel shows the generic items for recipe crafting, this is the sum of ALL item's cost of copper for example. \n\n Note that this is going, to sum up the cost of base resources, secondary, tertiary, and so on.",
  },
]
