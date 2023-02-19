import { HamburgerIcon, Phoneİcon } from './../../../icons'
import SearchBar from './../../ui/searchbar'

const BottomHeader = () => {
    return (
        <div className='gt-bottom-header'>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="gt-categories-menu inline-flex items-center gap-3">
                        <span><HamburgerIcon/></span>
                        <button>Kateqoriyaları göstər</button>
                    </div>
                    <div className="gt-search-product">
                        <SearchBar />
                    </div>
                    <div className="gt-contact">
                        <button>
                            <span><Phoneİcon /></span>
                            <span>Əlaqə</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader
