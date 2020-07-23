json.extract! comment, :id, :user_id, :movie_id, :body
json.author comment.author.name
json.updated_at comment.updated_at.localtime