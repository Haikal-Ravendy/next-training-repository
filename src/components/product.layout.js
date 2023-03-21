function ProductLayout(props){
    return (
        <div className="w-full">
            <div className={'w-full h-20 bg-white border-b'}>
                <p> Product Layout </p>
            </div>
            <div className={`w-full bg-gray-100`}>
                {props?.children}
            </div>
        </div>
    )
}

export default ProductLayout;