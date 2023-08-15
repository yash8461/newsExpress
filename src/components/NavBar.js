import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {

 
   

    return (
        <div>
           
            <nav className="navbar fixed-top navbar-expand-md  bg-white "  >
                
                <div className="container-fluid d-flex flex-column border-bottom border-3">
                    <div className='border-bottom border-3 border-danger text-primary'>
                        <h2>newsExpress</h2>
                    
                </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" >
                        <span > <img src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png" alt="menu" style={{width:"32px"}}/></span>
                    </button>
                    <div className="collapse navbar-collapse mt-2" id="navbarToggle">
                        
                        <ul className="navbar-nav mb-2 ">
                            <Link className="navbar-brand" to="/"><img style={{ width: 60 }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABIFBMVEX///8REiT1Qzc8PDwAAADa2ts5OTk3Nzf1OiwxMTH0QDT0NCYtLS00NDQqKir+6uj6w7/1WlH8QzbyQziEPjv86Ob2eHD1cmwkJCQ4Ih73lpD5+fny8vJWVlZJSUmXl5fo6Oifn580PDtwcHC8vLyNjY0AABetra3JyclkZGRNTU0AABre3t5CQkJMTExoaGh/f3/Q0ND1Y1n819QYHRoVFRO3t7f1UEX3iYP4npp5eXn0LBv6ubT5sKxBQUwfIC9qanP0HAD3gnmNjZV8fYYvMD1ZWmMAAA6np6wvMT7u8vOUmpkgLCzosa54LCe0eHXUmJSPSESuaWT7trL6zckaAAB9aGcpDAKyoJzfy8lnSUU9JSCVe3fGsa4CDwxKSlTLWjyWAAARBElEQVR4nO1dDXuiSBLGIF8KJJlsJkxAxFH8iJpoMmqiO+oENJO92bu9m+ze7X3E//8vrroRBGncmb2Izl6/8yTTtE1bL1VdXQ10hWEoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKChIsLr1er8G6NfrXWvX0rwE9Fa/eMWqqhyCqrJXxX5L37Vsvxs6VyoLmiwJ7Dp4QZI1vlzivkVy9Y6pSgK/pCLIqgZlSVMlfsVONTv1Xcv5deA6iqr4DIAVX65xRoGXSka9VJACbiyvyIrN7VraL4XeL2gKElryaKmNCjI5/QKIoc+tkqliam0ZmrGKVuh/CyZpeGILqmCXkPRqoet9EBCDYk0A0nyjYoNioaCapb2nVlLA0HhJGtaZLsuzglTzP9ELATE4sIG9UjCYelnCJwglcn97gj4rIwVclAyGqYDoUsEKPosQA+fCK6zStpCKL6ElL7f7qYv7peAaSEKtgIdURQMz7IQsbI0YYxUkVuAt9EmlgE5UG6105f1SFGUBLrxZwQd1lWW1iHmtE2P0K2CGdAaomDLYrVxMSdSvAWeCFUrt5ZDiQE41OmxixBimLLHKxVKpNRb8iWzune+vycgKbcM7MtgYL0xsXSPATLpalg1bQ0OtxuwVyipSV9c/vFJY2V5rQiKmFwRWDSq7SGlqeZtyfiUsU4Kxv2JSVFmlsd6IRIwxIOhSV2EVmgQk09qSmF+NLi/AhFVZHcss3zbWWxGJMV010rYCIbPAd2PNdgI8YV1Yq4pL0EJcNjIxpqSyUmd16Cm/Em+XPmpowhqGKooyS/TbZGJoPGrhGB+GK6/twWRdA7ehhh2FBYZ4SWqZQMwCIma4wkY97tw59rX1iXgIGiAOkgRiyBjlSA8lZAM71hkOnCJXtx4dMyEkEYMPeMEKVyDr1nY6zrpSzGoaAo8DwDgaScTQtYjOemDfvLRD32jBKjlqh0xdYxPETybGXME0bUVqwDzXtJgm9LbAKmuyFmCZlbBoLPDKejSyBBdTGWMrrGDuavU5BENUokMB5tv1SDdAI5EYUxZYOTKjcw1062eY0HzLQI4eAvJhWKKysiZhCBuIcVr0euAV0K6cPtgPi+4DKKvVP9OSEkfYRmIwyviV4dXxCuiiDQHMLpaeJs/Klb6goPs1fuRQBGJW0gmbiIFj9OOoVhktXyDmr6isQJzptwsInNB8ZXlilL0FYptXklcdDSGZmH7BC3hhZtmS4t/a6khrM3ca4FAEj0v1NqwxFRlRg+suJ9/a3USMKUmsZgEtGRyStFxt6mCMUtrG2BBWEXwJLRAF7ao7hNXVplM2ELMkVrE7GvKzsr8ORz42vq7bLiqRwMkoolu/AtLchtsxG4mhSVpR0H3hckhHYIwpL2EUnufDbt2yvacNQvn3mSJnt1l2nRZeYPPC/y7tl6Mkx+YYo2hiZqpk18kzWRIxnSu2kcYBnfURVYO1XYqTmdHml54jDAsuOnoWpqjssE8Y80RiVqVjakjZYIc8YTyhb0ovsoLrSDB9NNSHEnp8xCuyZA5r3ahEV+vEuH7nQpHR4yZB1joQHSpWrNO+mqLKwA3zhXg1zM5wcfEDP957rqex5WK/axkGZugT0w2r2y8NTU3DpHjQcLmio5U0aXUJi7XUgmFwiTJBhIYg4NlZ7xYbqudL0DNZVZPahUZ52DF5/qJTbhRMCShJ+LkgqFYr+GMSon/CCrVPtI7toPD2rRmv1T+9/RQYzQ/1PxU+fXq7GZ8+XdqVH4IO7E/Ebttv3xLM46Whnz4d/fjn7777y1EMP0H1j6Hjp6Of/vbX7zbgbz9Bm2gHf/7xKIa/fIeqn063aY+H54NRPp9/9eqVmI9BjFWjmk0Q4x3Eu/WrR4O7w23xOsrlcwc7Qy5/cLQdXu9HO6SFqY3eb4PX02i3tBBGT1sgdrBjfSHkTl6e1+f8rlkh5L9/cWJne6AwUNnZS/PSB2RiOQ+hYm5V8ityhFZrp6CDpfsXc8nXMDd46enskPxtJ8cYiHVuEJSXtT5yfgFJtqqFo/AH+ZPbz0dPN09Hd2fJ00ru4KUns1OR9D3i6+XH8Gl+Ocvcia9eR069Gfnrs2uQN7jiIyDpl09y+euQw9M/D4hfh5i9ODHiNQyInYvBuD4XX0UHws2Hm2XpXswNguqTnOi300XxNvp1+lkCs7SJnY5yG4j5EcO5GBr81znx3G+RP2bWcLgnxJgzcQOxu2XpvRhwQeoLfPdTEFLoT76pnr3aD2JH+WRiI9/Ovs+H5qFzMe+b6PuRX7r+4Le9I6ssdWL6CYnY9clgMDgRr5eHT6NQTPReHPlC3uZPvcLhqsf35IAgdWLM+YhETPTmKb+T0WglF6jPL57ll9X6SdDj9/tC7PQDiZh3lu/vjdFo1ePTyPeQ+rG41BhzP7q+8bAvpsgwx58JxEQcVvhDSA95e1Cff/LhQTDaQPGjZfxB5LULYt+/JxDDYyyY4vRBqP3hyHeWp3nxblV9KyZNzjsiZhBMUQcwIKkv9/V5qL3o+/infO4kJO/p7YaF+g6IMXqcGAYQu18WX4eWwPrAn7fBAYqRU26OE9dIuyC2BIFYEBTeelw84Y5vggbQ0/Fp+Jy7JGZ7Rsz39+ceF8/NnPky4qVeLn8elvkogVnKxMJXmzDGDvx56r3X0LPMez96Wi71xIPwvZr7vXD3T6E1R5jY8chz3L47f8JiHXoKvFsS00E5IiCfH4mriOuGfO8oZWI396uWhAk6WKudYrFOP+D/jpbETkcH4v2dB/EsUP5eaOxGXK3YScR8f++1OvqAFezftIbhlPc1fp0/1tfO3S2xD6ubtERiESdzF73xCd7e1yhznBv5KiPfPUqb2CgUDYfHWB4NntxB7jrc1+t8ZL18u1p9I2L+JLAnxPLBF4aJnd8iHOeiN5cGYihkxGoNgpDrFbH9MMVRPrCu2DyGPLcYmhB0cBZhntBzEJrc5YNzT/aD2CpuJxJbhe/YkYcPkbdfaTRgfLof7n50EAx6MrHQrWlYQuY/rw5vUIwRCu9XJ+0DMQhj/cCdbIohwc/FlekxKLZHPeXPI6fot7sNqXJnhxggXG7gFQ0IDZe1Pl4jJoZ/pINXyB2vPl0ulfOD977M+undQWo3TA/JT5Fyoug59KCIyn5RjH9KPsRd5cXr+/O789vXMEmkd4s78aFE6DfpOFa16aGNR3fDM4mD3OC3Rf1KJAzmlBEenC+EfXhSu51ntdd7oDLx+rfl/GocJo7o1JATt/Kqx01uxzoTD25+W8rfg9Pr0UaXtU3kcuLoemuv5jBP9wP4ihNALg6oDT99Pjg4GQxONgHdSw2dcZDYLVQfDO63pC4fh4enP79588thDFD993+Ej3/9xy///NebZPzrn//+z6+hE/7z9zc//7re6+HhL2/e/Hx6uD1lhdB4ftezYrU633sOdhNwtau3z9nndxi93vNzNpvtQRH+yz4/95b1z9l37WHf78qG5vF3Aqznd89pvaJez77LEl5b7vR6Enqsolc6PaDRQ4wQH00yGx27VCv0emytVrKHhbaMGPb8JpKN3+C/6PWu4r3a8GWpbZEzQab4m9oVEIHTK2VPOYiTXOjUui2/ZSfbu/DbGly9NCxouCnipna6rWwvG9/wYcBXXcRqt4VKT9LiMliyrBbaPU2WZe1dz7T7rSj5jqauvSpqcLWOkNVQciet14Zf8Xe/i5rcS3FLQYFn1bjKGjyLX16W2WGF8Oq9rZDeP2es2pUgeyme2jGbMzSW9F711lDX2PV36I2aiTYF8Kppd8mvBdmKkOAFjMoQbY9hea2xttGis7b7e+soCKwcTr2hl9o4cxHfSNgmwWwixqCkF3ivBK8WwobHyayQpsLw3sOwlDVBQglUlI12s5EYMwRr5FFeIPVipaKGwGoppy6xpdXulgpK2CTAta5JUT2unbJRY2gTpI5TP4FBLp1ILb7bduvAOVYsVPK2HmpoO6OxUZCNxGoyi3yiXmvLaEcI3kJmqaT0GdsG2kGJ7K4kKSgFkGc+HWWDJBuJFfxdJXoNb/pjK3gg72Jjfhnsrti6QBtgWd8ou+qGLb4J7j440d9VYtiSACbQAWvfyU5oo422HYVTADH4wifGCbaUTKwcUXWroXr7rtI3RIQ63uAtRWZVtMUmad7ZQKylrQ3OGk6IR8jjkgpK6LquOQvw2UkqA2JJk8FQYWUrUsPF806kiKHECmv7nksyKycM+GIisZbKru2w0mEG21WqAfT1BYWVosx0hbhpDiGZGEraYkVqUI6xdEOOKAxTWGdWi+9LXSKRWDc2/QEv4XInjsNHi+dZOWIy+sXaTuIAicQKAh/dnVmWYfq3iG1TQwslpYrorJKUNAcRI8X9KHCK7Au/kmDK33lKQo5H6bbCKkKRK8nlJxAzUOAUqjcuwA7ZnfMCnYEYSjsU++JEUwRjTCBWji65uLbACu094IU2diusoIS22ZbIxkgmhgwxZMp9SfAygO4DjIaEAquV0A2F5BlLJGLRpHZ6R2NZubFTfxgBkkcqBOZoCTwhmxiJWDQNIQfDi9XSXoFtRA0tNVfpUioa+Ov1cUIgFk0ciVMA7T7rWxSciVKQXgbJc9Qg72oAArGrUKrPOupButwLtxEGTmnMB/k4OlKMWZzYFQqcvKplCqC9MkMfOOuSInUsfIRz5UYu/zoxvRGQtzooBZBs7kkqzBiKKLO2JHvpRpCrlMITNRC7CBGzLtAsYUGp1UHZxhV1H7MEL2F1VJz35gold4aIj9WKKypRYn2UjPvSYvRKQ8O0lpreV3BlnBdINW0O3aJj5UJgXmFi1lBFCXYMzjZVAefK2bvMxzEANZwPXTbtK5wf3vcnK2IGzqrFtm1Txk214d75QiKsoonT2C//RoGiNfoolqhJ+K6B0cXpp3COf5QrRzWL1o4F/nLoFZQ8J/jjGIKqXNkVW+HNSqncDn2gqNKwvvc5/KMwKkNZlYI/LCFIyPPxcvD3M1BOHZn4uOkbQLdWvlRUWVH44M9jACNeUWRVuSzX9t9fbIBudWt2uWAqqoahKmZhaNf+GH9uh0EpmwzLarUsP5UTBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBcX/Au4PCib7BwWT+YOCEvvWsJFYsxk5Wv58G1gSG8PPbOKVH/3PqvN5dTYOmi6amcn8MfONwCPWnE6bVadarWaq1awzaVarzWY1+xEwLWUfstlMM5uddbPZR2f8G/3tDZYamzjViesW3azruK4zcxx3UVpwi2x2as0drjsbc9yiPuZm491pLGkUNGHANL1xEpQyAbGqk5lOp1X4yWadppPJTt35w7jbcqfFSTc7r1XG2YnFNdMdYs3pxK1OqrPJY3PSzLju4yQzaU4WYxgy8H8TjqrThTN2Fs40U5x9nLjO1Fm4bjVMrDmfO3NnOnXHYJKZ0kMVmjQfsk3OLS762XG//vAws7qTlIktpq7zES6267pTB37D4dydfhw/ABfXcT46j9NHZ+JOm+7cnbnTDGozjhLLND+6E6c5mxTBQcyn84wzXzRLUweZHzetuE7fHdcX3EOqxDLV/syZd+YLUIW7mDvADl17Z575OC5NSwsgOpk7j1DnuP3J1P04hubOuBklNp00Z/awOXPch2l26kxms+a86FarQNCZPzxMndk0W07bdYDRjR/GmcfmODOZjKuPk1kVDPERyrhmMs7MZpNFc1ytTjLj6mL+OMssFlFieMxVm/gH/mF1gnPEcxmqhprmns5igVTNZmY19/5/Rh7fMiixbw3/BQpXK3p108UlAAAAAElFTkSuQmCC" alt="..." /></Link>
                            <li ><Link className="nav-link " to="/"><strong>Home</strong></Link></li>
                            <li ><Link className="nav-link " to="/business"><strong>Business</strong></Link></li>
                            <li><Link className="nav-link " to="/entertainment"><strong>Entertainment</strong></Link></li>
                            <li ><Link className="nav-link " to="/general"><strong>General</strong></Link></li>
                            <li ><Link className="nav-link " to="/health"><strong>Health</strong></Link></li>
                            <li ><Link className="nav-link " to="/science"><strong>Science</strong></Link></li>
                            <li ><Link className="nav-link " to="/sports"><strong>Sports</strong></Link></li>
                            <li><Link className="nav-link " to="/technology"><strong>Technology</strong></Link></li>
                        </ul>
                  
                    </div>
                </div>
                
            </nav>
        </div>
        
    )

}

export default NavBar
