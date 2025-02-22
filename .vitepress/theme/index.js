import DefaultTheme from 'vitepress/theme'
import CraftingTable from '../../components/CraftingTable.vue'
import SmithingTable from '../../components/SmithingTable.vue'
import ShufflingCraftingTable from '../../components/ShufflingCraftingTable.vue'
import ToolTip from '../../components/ToolTip.vue'
import ShufflingSmithingTable from '../../components/ShufflingSmithingTable.vue'
import EnchantedItem from '../../components/EnchantedItem.vue'
import ImageShuffler from '../../components/ImageShuffler.vue'
import Furnace from '../../components/Furnace.vue'
import BrewingStand from '../../components/BrewingStand.vue'
import Anvil from '../../components/Anvil.vue'
import Trading from '../../components/Trading.vue'

export default {
    extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CraftingTable', CraftingTable)
    app.component('SmithingTable', SmithingTable)
    app.component('ShufflingCraftingTable', ShufflingCraftingTable)
    app.component('ToolTip', ToolTip)
    app.component('ShufflingSmithingTable', ShufflingSmithingTable)
    app.component('EnchantedItem', EnchantedItem)
    app.component('ImageShuffler', ImageShuffler)
    app.component('Furnace', Furnace)
    app.component('BrewingStand', BrewingStand)
    app.component('Anvil', Anvil)
    app.component('Trading', Trading)
  }
}