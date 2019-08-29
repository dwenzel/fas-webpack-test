import { library, dom } from '@fortawesome/fontawesome-svg-core'
import {
    faUser as fasUser
} from '@fortawesome/free-solid-svg-icons'

// Import regular weight icons
import {
    faUser as farUser
} from '@fortawesome/free-regular-svg-icons'

// Add icons to library
library.add(
    // Solid
    fasUser,

    // Regular
    farUser,
)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();
