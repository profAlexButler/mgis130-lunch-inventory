# Stock board

A screen in the food truck kitchen that shows what's running low before it runs out.

## Our plan

**1. What information goes in?**
- The morning count for each item. The shift lead types it in at open.
- How many of each item have sold so far. The register adds these as orders come in.
- Both live in `data/stock.json`.

**2. What do we do with it?**
- Left = counted at open minus sold so far.
- Anything with less than 20% of its morning count left is running low. Zero left is sold out.

**3. How should it look?**
- Like the kitchen's prep list on a tablet: one row per item, with the number left big and easy to read.
- Sold-out items grayed out so nobody reads them by mistake.
- Readable on a phone.

## Done looks like

1. Every item shows how many are left.
2. Sold-out items are grayed out.
3. It's readable at phone width.

## Next version

- A "Running low" list at the top of the page.
