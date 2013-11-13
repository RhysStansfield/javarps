require 'data_mapper'

env = ENV["RACK_ENV"] || 'development'

DataMapper.setup(:default, ENV["DATABASE_URL"] || "postgres://localhost/rps_#{env}")

require './app/game'

DataMapper.finalize

DataMapper.auto_upgrade!