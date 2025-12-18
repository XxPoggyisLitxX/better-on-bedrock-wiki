import DefaultTheme from 'vitepress/theme'
import { watchEffect } from 'vue'
import { useData } from 'vitepress'

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
import './overrides.css'
import Callout from '../../components/Callout.vue'
import FeatureGrid from '../../components/FeatureGrid.vue'
import GalleryMasonry from '../../components/GalleryMasonry.vue'
import ImageCarousel from '../../components/ImageCarousel.vue'
import ParallaxHero from '../../components/ParallaxHero.vue'
import StatBadge from '../../components/StatBadge.vue'
import ImageSlideshow from '../../components/ImageSlideshow.vue'
import MansoryCard from '../../components/MansoryCard.vue'
import ZigZagShowcase from '../../components/ZigZagShowcase.vue'
import VersusRow from '../../components/VersusRow.vue'

export default {
  extends: DefaultTheme,
  setup() {
    const { frontmatter } = useData()
    const CLASS = 'wide-structure'

    if (typeof window !== 'undefined') {
      watchEffect(() => {
        const enable =
          frontmatter.value.wide === true || frontmatter.value.layoutClass === CLASS
        document.body.classList.toggle(CLASS, !!enable)
      })
    }
  },
  enhanceApp({ app }) {
    app.component('CraftingTable', CraftingTable)
    app.component('VersusRow', VersusRow)
    app.component('ZigZagShowcase', ZigZagShowcase)
    app.component('MansoryCard', MansoryCard)
    app.component('ImageSlideshow', ImageSlideshow)
    app.component('Callout', Callout)
    app.component('FeatureGrid', FeatureGrid)
    app.component('GalleryMasonry', GalleryMasonry)
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

