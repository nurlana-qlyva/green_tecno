import { HamburgerIcon, Phoneİcon } from './../../../icons'
import SearchForm from '../../core/search-form'

export default function BottomHeader() {
    return (
        <div className='bottom-header'>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="categories inline-flex items-center gap-3">
                        <span><HamburgerIcon/></span>
                        <button>Kateqoriyaları göstər</button>
                    </div>
                    <div className="search-input">
                        <SearchForm />
                    </div>
                    <div className="contact">
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
