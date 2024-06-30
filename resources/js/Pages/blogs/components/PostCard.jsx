import React from 'react';

const PostCard = ({ post, index }) => (
  <div className="flex mb-6">
    <div className="w-1/3">
      <img src={`https://picsum.photos/id/${312 + index}/300/300`} alt={`Post ${index}`} className="rounded-l-lg" />
    </div>
    <div className="w-2/3 bg-white rounded-r-lg p-4 pt-0 flex flex-col justify-between"> {/* Modifikasi di sini */}
      <div>
        <h3 className="text-lg text-slate-800 font-semibold mb-4">{post.title}</h3>
        <div className="flex items-center mb-4">
          <div className="w-9 h-9 bg-red-600 rounded-full mr-2"></div>
          <div>
            <span className="text-sm text-slate-800">{post.author}</span>
            <div className="text-xs text-slate-600">{post.date}</div>
          </div>
        </div>
        <p className="text-sm text-slate-800 mb-4 line-clamp-3">{post.content}</p>
      </div>
      <a href='/blogdetail'>
  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm max-w-sm mr-80">Read More</button>
  </a>      
</div>
  </div>
);

export default PostCard;