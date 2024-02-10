import "./Items.css"
const Items = (props) => {
  return (
    <div className='w-auto item'>
          <img src={props.image} alt="" />
          <p className='my-[6px]'>{props.name}</p>
          <div className='flex gap-[20px]'>
              <div className='new text-600 text-[18px] text-[#374151]'>
                 ${props.new_price}
              </div>
              <div className='old text-500 text-[18px] text-[#8c8c8c] line-through'>
                ${props.old_price}
              </div>
          </div>
    </div>
  )
}

export default Items
