import { useState } from 'react'
import { MessageSquare, ThumbsUp, MessageCircle, Plus, Tag } from 'lucide-react'
import { forumPosts } from '../data/mockData'

export default function ForumPage() {
  const [showNewPost, setShowNewPost] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-abs-navy">Student Forum</h1>
          <p className="mt-1 text-gray-600">
            Connect with your EMBA cohort · India Executive Track 2026
          </p>
        </div>
        <button
          onClick={() => setShowNewPost(!showNewPost)}
          className="flex items-center gap-2 rounded-lg bg-abs-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-abs-navy-light"
        >
          <Plus className="h-4 w-4" />
          New Discussion
        </button>
      </div>

      {showNewPost && (
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="font-semibold text-abs-navy">Start a New Discussion</h2>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Discussion title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-abs-navy focus:ring-2 focus:ring-abs-navy/20"
            />
            <textarea
              placeholder="Share your thoughts with the cohort..."
              rows={4}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-abs-navy focus:ring-2 focus:ring-abs-navy/20"
            />
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setShowNewPost(false)
                  setNewTitle('')
                  setNewContent('')
                }}
                className="rounded-lg bg-abs-navy px-4 py-2 text-sm font-semibold text-white"
              >
                Post Discussion
              </button>
              <button
                onClick={() => setShowNewPost(false)}
                className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Strategic Performance Management', 'Corporate Finance', 'Change Management', 'General'].map(
          (cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-abs-navy text-white'
                  : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:bg-abs-cream'
              }`}
            >
              {cat}
            </button>
          ),
        )}
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {forumPosts.map((post) => (
          <div
            key={post.id}
            className={`rounded-xl border bg-white p-6 ${
              post.isOwn ? 'border-abs-gold/40 ring-1 ring-abs-gold/20' : 'border-gray-200'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-abs-navy text-sm font-semibold text-white">
                {post.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-900">{post.author}</span>
                  {post.isOwn && (
                    <span className="rounded-full bg-abs-gold/20 px-2 py-0.5 text-xs font-medium text-abs-navy">
                      You
                    </span>
                  )}
                  <span className="text-xs text-gray-400">· {post.time}</span>
                </div>
                <p className="text-xs text-gray-500">{post.role}</p>
                <h3 className="mt-2 font-semibold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.content}</p>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Tag className="h-3 w-3" />
                    {post.tag}
                  </span>
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-abs-navy">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-abs-navy">
                    <MessageCircle className="h-3.5 w-3.5" />
                    {post.replies} replies
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-gray-300 bg-white/50 p-8 text-center">
        <MessageSquare className="mx-auto h-8 w-8 text-gray-300" />
        <p className="mt-2 text-sm text-gray-500">
          Forum discussions are visible to all enrolled students in your cohort.
        </p>
      </div>
    </div>
  )
}
