clear all
clc

hey_fucko_heres_your_stats = rollstats(70,90)
sum(hey_fucko_heres_your_stats);


function [stats] = rollstats(minimum,maximum)
   
    try
        stats = helper(minimum,maximum,0);
        
    catch 
        warning('Too many iterations. Please try again with a more viable range');
        stats = NaN;
    end
end

function [rollnumber] = helper(minimum,maximum,count)
rollnumber = zeros(1,6);
for i = 1:6
    A=randi([1 6],1,4);
    index = find(A == min(A), 1, 'first');
    A(index) = 0;
    B=sum(A);
    rollnumber(i) = B;
end

temp = sum(rollnumber);
if (maximum >= temp) && (temp>=minimum)
    disp('Success')
else
    if count == 1000000
        rollnumber = null;
        %return
    end
    rollnumber = helper(minimum,maximum,count+1);
end


end