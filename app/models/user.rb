class User < ApplicationRecord
    validates :username, uniqueness: true
    validates :username, :name, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    
    before_validation :ensure_session_token
    attr_reader :password

    has_many :comments

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end
    
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
end
