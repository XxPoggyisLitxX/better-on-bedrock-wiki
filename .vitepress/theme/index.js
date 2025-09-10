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
import AudioPlayer from '../../components/AudioPlayer.vue'
import YouTubeEmbed from '../../components/YouTubeEmbed.vue'
import FeatureSection from '../../components/FeatureSection.vue'
import './restructured-blog.css'
import Callout from '../../components/Callout.vue'
import FeatureGrid from '../../components/FeatureGrid.vue'
import GalleryMasonary from '../../components/GalleryMasonry.vue'
import ImageCarousel from '../../components/ImageCarousel.vue'
import ParallaxHero from '../../components/ParallaxHero.vue'
import StatBadge from '../../components/StatBadge.vue'


export default {
    extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CraftingTable', CraftingTable)
      app.component('Callout', Callout)
  app.component('FeatureGrid', FeatureGrid)
  app.component('GalleryMasonry', GalleryMasonary)
  app.component('ImageCarousel', ImageCarousel)
  app.component('ParallaxHero', ParallaxHero)
  app.component('StatBadge', StatBadge)
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
    app.component('AudioPlayer', AudioPlayer)
    app.component('YouTubeEmbed', YouTubeEmbed)
    app.component('FeatureSection', FeatureSection)
  }
}