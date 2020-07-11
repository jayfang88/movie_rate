@media.each do |medium|
    json.set! medium.id do
        json.partial! 'medium', medium: medium
    end
end