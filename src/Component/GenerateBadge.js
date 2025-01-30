import React, { useState } from 'react'
import { Badge } from 'rizzui';

export default function GenerateBadge({items}) {
    const [showChildren, setShowChildren] = useState(true);
    const badgeColors = { read: "bg-yellow-buttonYellow", write: "bg-green-buttonGreen", delete: "bg-red-buttonRed" };
  
    return (
      <div className="flex flex-row gap-4">
        
        {items.map((item, index) => {
          
          const toggleChildren = () => {
            setShowChildren(!showChildren);
          };
  
          return (
            <div key={index} className="flex flex-col py-1 px-1.5">
              <label className='capitalize'>{item?.value}</label>
              <div className="flex flex-row gap-2">
                {item.permission.map((perm, permIndex) => (
                  <div key={permIndex} className="flex flex-col">
                    <div className="flex gap-2">
                      {Object.keys(perm).map((key) =>
                        perm[key] ? (
                          <Badge
                            key={`${item.value}-${key}`}
                            renderAsDot
                            className={badgeColors[key]}
                          />
                        ) : null
                      )}
                    </div>
                    {item.child && item.child.length > 0 && (
                      <div className="pl-4 mt-2">
                        <button 
                          className="text-blue-500 underline"
                          onClick={toggleChildren}
                        >
                          {showChildren ? 'Hide' : 'Show'} Child Permissions
                        </button>
                        {showChildren && item.child.map((child, childIndex) => (
                          <div key={childIndex} className="flex flex-col">
                            <label className="capitalize">{child.value}</label>
                            <div className="flex gap-2">
                              {Object.keys(child.permission[0]).map((key) =>
                                child.permission[0][key] ? (
                                  <Badge key={`${child.value}-${key}`} renderAsDot className={badgeColors[key]} />
                                ) : null
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    );
}
