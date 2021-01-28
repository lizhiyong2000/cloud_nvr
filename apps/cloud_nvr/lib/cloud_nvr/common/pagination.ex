defmodule CloudNvr.Pagination do
    defstruct [:data, :page_number, :page_size, :total_num, :total_pages]
    
    def new(query, params) do
        %CloudNvr.Pagination{
            data: [],
            page_number: 0,
            page_size: 0,
            total_num: 0,
            total_pages: 0
        }
    end
end